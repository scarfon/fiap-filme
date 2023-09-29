"use server"

import {cookies} from "next/headers"

export async function serverLogin(){
    cookies().set("user_email", "joao@fiap.com.br", {
        maxAge:60*60*24*7
    })
}

export async function serverLogout(){
    cookes().delete("user_email")
}