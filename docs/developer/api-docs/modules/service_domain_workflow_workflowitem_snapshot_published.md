# service/domain/workflow/workflowitem\_snapshot\_published
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/workflowitem\_snapshot\_published

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_workflow_workflowitem_snapshot_published.Event.md)

### Variables

- [schema](service_domain_workflow_workflowitem_snapshot_published.md#schema)

### Functions

- [createEvent](service_domain_workflow_workflowitem_snapshot_published.md#createevent)
- [validate](service_domain_workflow_workflowitem_snapshot_published.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/workflow/workflowitem_snapshot_published.ts:23](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/workflowitem_snapshot_published.ts#L23)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `projectId`, `subprojectId`, `workflowitem`, `time?`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_workflowitem_snapshot_published.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitem` | [`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md) |
| `time` | `string` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_workflowitem_snapshot_published.Event.md)\>

#### Defined in

[src/service/domain/workflow/workflowitem_snapshot_published.ts:33](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/workflowitem_snapshot_published.ts#L33)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_workflowitem_snapshot_published.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_workflowitem_snapshot_published.Event.md)\>

#### Defined in

[src/service/domain/workflow/workflowitem_snapshot_published.ts:58](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/workflowitem_snapshot_published.ts#L58)
