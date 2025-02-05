# service/domain/workflow/project\_assigned
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/project\_assigned

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_workflow_project_assigned.Event.md)

### Variables

- [schema](service_domain_workflow_project_assigned.md#schema)

### Functions

- [createEvent](service_domain_workflow_project_assigned.md#createevent)
- [mutate](service_domain_workflow_project_assigned.md#mutate)
- [validate](service_domain_workflow_project_assigned.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/workflow/project_assigned.ts:23](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/project_assigned.ts#L23)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `projectId`, `assignee`, `time?`, `metadata?`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_project_assigned.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `projectId` | `string` |
| `assignee` | `string` |
| `time` | `string` |
| `metadata?` | [`UserMetadata`](service_domain_metadata.md#usermetadata) |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_project_assigned.Event.md)\>

#### Defined in

[src/service/domain/workflow/project_assigned.ts:33](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/project_assigned.ts#L33)

___

### mutate

▸ **mutate**(`project`, `event`): [`Type`](result.md#type)\<`void`\>

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
| `event` | [`Event`](../interfaces/service_domain_workflow_project_assigned.Event.md) |

#### Returns

[`Type`](result.md#type)\<`void`\>

#### Defined in

[src/service/domain/workflow/project_assigned.ts:72](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/project_assigned.ts#L72)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_project_assigned.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_project_assigned.Event.md)\>

#### Defined in

[src/service/domain/workflow/project_assigned.ts:57](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/project_assigned.ts#L57)
