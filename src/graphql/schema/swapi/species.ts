import { connectionArgs } from 'graphql-relay-tools';
import { connectTypes } from '../../connection';

const typeDef: string = `
type Species implements Node {
  """The name of this species."""
  name: String

  """The classification of this species, such as "mammal" or "reptile"."""
  classification: String

  """The designation of this species, such as "sentient"."""
  designation: String

  """The average height of this species in centimeters."""
  averageHeight: Float

  """The average lifespan of this species in years, null if unknown."""
  averageLifespan: Int

  """
  Common eye colors for this species, null if this species does not typically
  have eyes.
  """
  eyeColors: [String]

  """
  Common hair colors for this species, null if this species does not typically
  have hair.
  """
  hairColors: [String]

  """
  Common skin colors for this species, null if this species does not typically
  have skin.
  """
  skinColors: [String]

  """The language commonly spoken by this species."""
  language: String

  """A planet that this species originates from."""
  homeworld: Planet
  personConnection${connectionArgs()}: SpeciesPeopleConnection
  filmConnection${connectionArgs()}: SpeciesFilmsConnection

  """The ISO 8601 date format of the time that this resource was created."""
  created: String

  """The ISO 8601 date format of the time that this resource was edited."""
  edited: String

  """The ID of an object"""
  id: ID!
}

${connectTypes('SpeciesPeople', 'people', 'Person')}
${connectTypes('SpeciesFilms', 'films', 'Film')}
`;

export default typeDef;
