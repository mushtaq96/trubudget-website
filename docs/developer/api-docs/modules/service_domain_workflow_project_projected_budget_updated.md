# service/domain/workflow/project\_projected\_budget\_updated
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/project\_projected\_budget\_updated

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_workflow_project_projected_budget_updated.Event.md)

### Variables

- [schema](service_domain_workflow_project_projected_budget_updated.md#schema)

### Functions

- [createEvent](service_domain_workflow_project_projected_budget_updated.md#createevent)
- [mutate](service_domain_workflow_project_projected_budget_updated.md#mutate)
- [validate](service_domain_workflow_project_projected_budget_updated.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`<`any`\>

#### Defined in

[src/service/domain/workflow/project_projected_budget_updated.ts:22](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/workflow/project_projected_budget_updated.ts#L22)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `projectId`, `organization`, `value`, `currencyCode`, `time?`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_project_projected_budget_updated.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `projectId` | `string` |
| `organization` | `string` |
| `value` | `string` |
| `currencyCode` | `string` |
| `time` | `string` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_project_projected_budget_updated.Event.md)\>

#### Defined in

[src/service/domain/workflow/project_projected_budget_updated.ts:33](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/workflow/project_projected_budget_updated.ts#L33)

___

### mutate

▸ **mutate**(`project`, `event`): [`Type`](result.md#type)<`void`\>

Applies the event to the given project, or returns an error.

When an error is returned (or thrown), any already applied modifications are
discarded.

This function is not expected to validate its changes; instead, the modified project
is automatically validated when obtained using
`project_eventsourcing.ts`:`newProjectFromEvent`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | [`Project`](../interfaces/service_domain_workflow_project.Project.md) |
| `event` | [`Event`](../interfaces/service_domain_workflow_project_projected_budget_updated.Event.md) |

#### Returns

[`Type`](result.md#type)<`void`\>

#### Defined in

[src/service/domain/workflow/project_projected_budget_updated.ts:74](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/workflow/project_projected_budget_updated.ts#L74)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_project_projected_budget_updated.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_project_projected_budget_updated.Event.md)\>

#### Defined in

[src/service/domain/workflow/project_projected_budget_updated.ts:59](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/workflow/project_projected_budget_updated.ts#L59)