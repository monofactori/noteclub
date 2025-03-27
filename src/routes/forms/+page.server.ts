import { fail, redirect } from '@sveltejs/kit';

let entries = [{ name: 'first', email: 'test', message: 'test' }];

export async function load({
    data
}: {
        data: { entries: typeof entries };
}): Promise<{ entries: typeof entries }> {
    return {
        entries
    };
}

/** @type {import('./$types').Actions} */
export const actions = {
    addEntry: async ({
        request,
        url
    }: {
        request: Request;
        url: URL;
    }): Promise<{ success: boolean }> => {
        const formData = await request.formData();
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const message = formData.get('message') as string;

        if (name && message) {
            const newEntry = {
                name,
                email,
                message,
                timestamp: new Date()
            };
            entries.push(newEntry);
        }

        return { success: true };
    }
};