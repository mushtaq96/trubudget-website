# project\_list
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / project\_list

## Table of contents

### Functions

- [addHttpHandler](project_list.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/project.list` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/project_list.ts:132](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/project_list.ts#L132)
