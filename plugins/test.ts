export default defineNuxtPlugin(() => {
    function test(name: string) { 
        return `Hello ${name}`
    }

    return { provide: { test }}
})