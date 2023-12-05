import type { Actions } from './$types';


/**
 * Submits the form data.
 * @param request - The request object.
 * @returns The data object.
 */
export const actions: Actions = {
    submit: async ({ request }) => {
      const formData = await request.formData();
      const data = Object.fromEntries(formData);
      return { data }; // Directly return the data object
    },
  };
  
