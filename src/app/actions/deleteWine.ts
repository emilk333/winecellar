'use server'
import { createClient } from '@/app/util/supabase/server';
import { revalidatePath } from 'next/cache';
 
export async function deleteWine(id: number) {

    const { data, error } = await (await createClient())
        .from('wines')
        .delete()
        .eq('id', id)

	if (error) {
		console.error(`Wine deletion failed: ${error}`)
	}
    
    revalidatePath("/")
}
