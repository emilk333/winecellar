'use server'
import { createClient } from '@/app/util/supabase/server';
import { revalidatePath } from 'next/cache';
import { v4 as uuidv4 } from 'uuid';
 
export async function createWine(formData: FormData) {

    const formValues = Object.fromEntries(formData)

    const { error } = await (await createClient())
        .from('wines')
		.insert({
            type: formValues?.type.toString().toLowerCase() ?? "",
            uuid: uuidv4(),
            vintage: formValues?.vintage ?? Number.MIN_VALUE,
            country: formValues?.country.toString().toLowerCase() ?? "",
            name: formValues?.name ?? "",
            producer: formValues?.producer ?? "",
            appelation: formValues?.appelation.toString().toLowerCase() ?? "",
            sub_appelation: formValues['sub-appelation'].toString().toLowerCase() ?? "",
            price: {
                buyingPrice: formValues?.price ?? Number.MIN_VALUE,
                estimatedCurrentValue: formValues?.estimatedCurrentValue ?? Number.MIN_VALUE
            },
            quantity: formValues?.quantity ?? 1,
            is_remote: typeof formValues.is_remote === "undefined" ? false : true,
            is_restricted: typeof formValues.is_restricted === "undefined" ? false : true
		})
 
	if (error) {
		console.error(`Wine entry table-row creation failed: ${error.message}`)
	}

    revalidatePath("/")
}
