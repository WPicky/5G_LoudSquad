// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const apiUrl = 'http://fake-backend.test/restapi';

const api_routes = {
  users_get_all: `${apiUrl}/members/get-all`,
  users_get_onlines: `${apiUrl}/members/get-onlines`,
  discussions_list: `${apiUrl}/discussions/list`,
  discussions_get_messages: `${apiUrl}/discussions/get-messages`,
  discussions_get_or_create: `${apiUrl}/discussions/get-or-create`,
  discussions_leave: `${apiUrl}/discussions/leave`,
};

export const environment = {
  production: false,
  api_routes,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
