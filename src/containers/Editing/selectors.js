import {createSelector} from "reselect"

import orm from "../../core/schema"

export const selectEditingEntities = state => state.editingEntities

export const getEditingEntitiesSession = createSelector(
  selectEditingEntities,
  editingEntities => orm.session(editingEntities)
)
