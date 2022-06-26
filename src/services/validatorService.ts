import Ajv, { AnySchema, ValidateFunction } from "ajv";

export function validateSchema(data: unknown, schema: AnySchema): boolean {
  return validate(schema)(data)
}

export function validate(schema: AnySchema): ValidateFunction<unknown>{
  const ajv = new Ajv()
  return ajv.compile(schema)

}