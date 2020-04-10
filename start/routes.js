'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

//Group Router Accounts: Create and Sessions
Route.group(() => {
  Route.post('create', 'UserController.create');
  Route.post('sessions', 'SessionController.store');
}).prefix('/accounts');

//Group Router Balance: Create and Update
Route.group(() => {
  Route.get('/read', 'GateWayBalanceController.read')
  Route.post('/create-or-update', 'GateWayBalanceController.createOrUpdate')
}).prefix('/balance').middleware('auth');

//Group Router Expenses: Create, Read, Update and Delete
Route.group(() => {
  Route.post('/create', 'GatWayExpenseController.create')
  Route.get('/read/:id', 'GatWayExpenseController.read')
  Route.put('/update/:id', 'GatWayExpenseController.update')
  Route.delete('/delete/:id', 'GatWayExpenseController.delete')
  Route.get('/tag', 'GatWayExpenseController.tag')
}).prefix('/expense').middleware('auth');

//Group Router Expenses: Create, Read, Update and Delete
Route.group(() => {
  Route.get('/data-list-paginator/', 'GatWayDataExpController.dataListPaginator')
}).prefix('/data-exp').middleware('auth');
