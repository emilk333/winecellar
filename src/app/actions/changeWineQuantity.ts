
'use server'
import { createClient } from '@/app/util/supabase/server';
import { revalidatePath } from 'next/cache';
 
export async function changeWineQuantity(id: number, newQuantity: number) {
    
    const { error } = await (await createClient())
        .from('wines')
        .update({ quantity: newQuantity})
        .eq('id', id)

    if (error) {
        console.error(`Wine quantity modification failed: ${error.message}`)
    }
    
    revalidatePath("/")
}
