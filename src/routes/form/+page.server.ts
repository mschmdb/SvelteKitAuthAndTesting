import type { Actions } from './$types';


export const actions: Actions = {
    submit: async ({ request }) => {
      const formData = await request.formData();
      const data = Object.fromEntries(formData);
      return { data }; // Directly return the data object
    },
  };
  
