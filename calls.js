async function createCall(call_type, location, details, assigned_unit) {
    const { data, error } = await supabase
        .from("calls")
        .insert([{ call_type, location, details, assigned_unit, status: "Active" }]);
    if (error) console.error("Error creating call:", error);
}
