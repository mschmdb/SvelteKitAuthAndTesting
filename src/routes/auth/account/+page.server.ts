import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/auth/signup');
	return {
        user: session.user.name,
		userId: session.user.userId as string,
		userName: session.user.username as string,
        
	};
};