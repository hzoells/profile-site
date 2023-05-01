interface FluxStandardAction<Type extends string = string, Payload = undefined, Meta = undefined> {
  type: Type
  payload?: Payload
  meta?: Meta
  error?: boolean
}

interface FluxStandardActionWithPayload<
  Type extends string = string,
  Payload = undefined,
  Meta = undefined
> extends FluxStandardAction<Type, Payload, Meta> {
  payload: Payload
}

interface FluxStandardActionWithMeta<
  Type extends string = string,
  Payload = undefined,
  Meta = undefined
> extends FluxStandardAction<Type, Payload, Meta> {
  meta: Meta
}

interface FluxStandardActionWithPayloadAndMeta<
  Type extends string = string,
  Payload = undefined,
  Meta = undefined
> extends FluxStandardAction<Type, Payload, Meta> {
  payload: Payload
  meta: Meta
}

export type StandardAction<
  Type extends string = string,
  Payload = undefined,
  Meta = undefined
> = Payload extends undefined
  ? Meta extends undefined
    ? FluxStandardAction<Type, Payload, Meta>
    : FluxStandardActionWithMeta<Type, Payload, Meta>
  : Meta extends undefined
  ? FluxStandardActionWithPayload<Type, Payload, Meta>
  : FluxStandardActionWithPayloadAndMeta<Type, Payload, Meta>
