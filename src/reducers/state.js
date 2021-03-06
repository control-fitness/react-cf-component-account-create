/**
 * Default state
 */

module.exports = {
  api: {
    submit: {
      response: false,
      messages: [],
    },
  },
  errors: {
    company: {
      name: false,
      country: false,
      currency: false,
      timeZone: false,
    },
    user: {
      name: false,
      email: false,
      password: false,
    },
    terms: {
      accept: false,
    },
  },
  inputs: {
    company: {
      name: '',
      country: '',
      currency: '',
      timeZone: '',
    },
    user: {
      name: '',
      email: '',
      password: '',
    },
    terms: {
      accept: false,
    },
    button: {
      submit: false,
    },
  },
};
