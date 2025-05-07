async function createReport(author_id, type, content) {
    const { data, error } = await supabase
        .from("reports")
        .insert([{ author_id, type, content }]);
    if (error) console.error("Error creating report:", error);
}
