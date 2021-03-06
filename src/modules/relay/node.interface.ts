import { Field, ID, InterfaceType } from 'type-graphql'

@InterfaceType('Node', { description: 'An object with a global ID.' })
export abstract class NodeInterface {
  @Field(() => ID, {
    name: 'id',
    description: 'The global ID of the object.'
  })
  readonly globalId!: string
}
