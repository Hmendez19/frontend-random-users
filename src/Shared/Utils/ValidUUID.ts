export default function isValidUUID(uuid:string):boolean {
    //example: '550e8400-e29b-41d4-a716-446655440000'  return true
    const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89AB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
    return uuidRegex.test(uuid);
}