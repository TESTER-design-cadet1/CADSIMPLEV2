async function addBOLO(description, created_by) {
    const { data, error } = await supabase
        .from("bolos")
        .insert([{ description, created_by }]);
    if (error) console.error("Error adding BOLO:", error);
}
