document.addEventListener("DOMContentLoaded", async () => {
    await loadCalls();
    await loadBOLOs();
});
async function loadCalls() {
    const { data, error } = await supabase.from("calls").select("*");
    if (error) return console.error("Failed to load calls");
    document.getElementById("call-list").innerHTML = "<h3>Calls</h3>" + data.map(call => `<p>${call.details}</p>`).join("");
}
async function loadBOLOs() {
    const { data, error } = await supabase.from("bolos").select("*");
    if (error) return console.error("Failed to load BOLOs");
    document.getElementById("bolo-list").innerHTML = "<h3>BOLOs</h3>" + data.map(b => `<p>${b.description}</p>`).join("");
}
