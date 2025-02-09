import { deleteWine } from "@/app/actions/deleteWine"
import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
	const requestData = await req.json()

	try {
		const results = await deleteWine(requestData.id)
        revalidatePath("/")
		return NextResponse.json({ data: results }, { status: 201 })
	} catch (error) {
		return NextResponse.json({ error: error }, { status: 500 })
	}
}
