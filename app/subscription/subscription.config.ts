export let SUBSCRIPTION_CONFIG = {
  validationMessages: {
    'name': {
        'required': 'Name is required'
    },
    'email': {
        'required': 'email is required',
        'invalidEmailAddress': 'invalidEmailAddress'
    },
    'director': {
        'required': 'Director is required',
        'minlength': 'Director must be at least 5 characters.',
        'maxlength': 'Director cannot exceed 50 characters.'
    }
  }
}
