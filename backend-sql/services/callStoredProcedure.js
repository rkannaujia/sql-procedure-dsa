
async function callStoredProcedure(storedProcedureName, params = [], actionType) {
    try {
        let query = `CALL ${storedProcedureName}(${params.map(() => '?').join(', ')});`;

        const response = await connectDatabase(query, params);

        // Handle different action types: query, insert, update, delete
        switch (actionType.toLowerCase()) {
            case 'query':
                return response.dbData[0]; // Return the fetched data
            case 'insert':
                return { insertId: response.dbData[0][0].InsertedEmpCode };
            case 'update':
                return response.dbData[0];
            case 'delete':
                return { affectedRows: response.dbData.affectedRows };
            default:
                throw new Error(`Unknown action type: ${actionType}`);
        }
    } catch (error) {
        console.error(`Error calling stored procedure ${storedProcedureName}:`, error);
        throw error;
    }
}

module.exports = {
    callStoredProcedure
};
