import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, message } = body;

    if (!name || !phone || !message) {
      return NextResponse.json({ message: "Vui lòng nhập đầy đủ thông tin." }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('contact')
      .insert([
        { name, phone, message, status: 'unread' }
      ])
      .select();

    if (error) {
      console.error("Supabase Error:", error);
      return NextResponse.json({ message: "Lỗi hệ thống khi gửi lời nhắn. Vui lòng thử lại sau." }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Tin nhắn đã được gửi thành công!", data }, { status: 201 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ message: "Lỗi Server." }, { status: 500 });
  }
}
