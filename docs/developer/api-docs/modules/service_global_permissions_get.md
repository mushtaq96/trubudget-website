# service/global\_permissions\_get
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/global\_permissions\_get

## Table of contents

### Functions

- [getGlobalPermissions](service_global_permissions_get.md#getglobalpermissions)

## Functions

### getGlobalPermissions

▸ **getGlobalPermissions**(`conn`, `ctx`, `serviceUser`): `Promise`\<[`Type`](result.md#type)\<[`GlobalPermissions`](../interfaces/service_domain_workflow_global_permissions.GlobalPermissions.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`GlobalPermissions`](../interfaces/service_domain_workflow_global_permissions.GlobalPermissions.md)\>\>

#### Defined in

[src/service/global_permissions_get.ts:11](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/global_permissions_get.ts#L11)
