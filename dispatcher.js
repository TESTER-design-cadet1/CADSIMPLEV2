document.addEventListener("DOMContentLoaded", async () => {
    const { data, error } = await supabase.from("bolos").select("*").order("created_at", { ascending: false });
    const boloSection = document.getElementById("bolo-section");
    boloSection.innerHTML = "<h2>BOLOs</h2>" + data.map(b => `<p>${b.description}</p>`).join("");

    const callRes = await supabase.from("calls").select("*").order("created_at", { ascending: false });
    const callSection = document.getElementById("calls-section");
    callSection.innerHTML = "<h2>Calls</h2>" + callRes.data.map(c => `<p>${c.call_type}: ${c.details}</p>`).join("");
});
