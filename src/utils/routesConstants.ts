interface IRoutesConstants {
  HOME: string;
  ADD_GOAL: string;
  FEEDBACK_ADD_GOAL: string;
  ADD_DEPOSIT: string;
  FEEDBACK_ADD_DEPOSIT: string;
  GOAL_DETAILS: string;
}

export default {
  HOME: '/',
  ADD_GOAL: '/add-goal',
  FEEDBACK_ADD_GOAL: '/success-add-goal',
  ADD_DEPOSIT: '/:goalId/add-deposit',
  FEEDBACK_ADD_DEPOSIT: '/success-add-deposit',
  GOAL_DETAILS: '/:goalId/details',
} as IRoutesConstants;
