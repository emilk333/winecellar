'use server'
import { createClient } from '@/app/util/supabase/server';
import { revalidatePath } from 'next/cache';
import { v4 as uuidv4 } from 'uuid';
 
export async function createWine(formData: FormData) {

    const formValues = Object.fromEntries(formData)

    console.log(formValues)

    const { error } = await (await createClient())
        .from('wines')
		.insert({
            type: formValues?.type ?? "",
            uuid: uuidv4(),
            vintage: formValues?.vintage ?? Number.MIN_VALUE,
            country: formValues?.country ?? "",
            name: formValues?.name ?? "",
            producer: formValues?.producer ?? "",
            appelation: formValues?.appelation ?? "",
            sub_appelation: formValues['sub-appelation'] ?? "",
            price: {
                buyingPrice: formValues?.price ?? Number.MIN_VALUE,
                estimatedCurrentValue: formValues?.estimatedCurrentValue ?? Number.MIN_VALUE
            },
            quantity: formValues?.quantity ?? 1
		})
 
	if (error) {
		console.error(`Wine entry table-row creation failed: ${error.message}`)
	}

    revalidatePath("/")
}
