# service/domain/workflow/subproject\_closed
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/subproject\_closed

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_workflow_subproject_closed.Event.md)

### Variables

- [schema](service_domain_workflow_subproject_closed.md#schema)

### Functions

- [createEvent](service_domain_workflow_subproject_closed.md#createevent)
- [mutate](service_domain_workflow_subproject_closed.md#mutate)
- [validate](service_domain_workflow_subproject_closed.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`<`any`\>

#### Defined in

[src/service/domain/workflow/subproject_closed.ts:20](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/workflow/subproject_closed.ts#L20)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `projectId`, `subprojectId`, `time?`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_subproject_closed.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `time` | `string` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_subproject_closed.Event.md)\>

#### Defined in

[src/service/domain/workflow/subproject_closed.ts:29](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/workflow/subproject_closed.ts#L29)

___

### mutate

▸ **mutate**(`subproject`, `event`): [`Type`](result.md#type)<`void`\>

Applies the event to the given subproject, or returns an error.

When an error is returned (or thrown), any already applied modifications are
discarded.

This function is not expected to validate its changes; instead, the modified
subproject is automatically validated when obtained using
`subproject_eventsourcing.ts`:`newSubprojectFromEvent`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `subproject` | [`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md) |
| `event` | [`Event`](../interfaces/service_domain_workflow_subproject_closed.Event.md) |

#### Returns

[`Type`](result.md#type)<`void`\>

#### Defined in

[src/service/domain/workflow/subproject_closed.ts:66](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/workflow/subproject_closed.ts#L66)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_subproject_closed.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_subproject_closed.Event.md)\>

#### Defined in

[src/service/domain/workflow/subproject_closed.ts:51](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/workflow/subproject_closed.ts#L51)