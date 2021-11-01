# IntroNgApp
This project was done to learn basics of angular framework. The project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.12.

## Angular concepts learnt from this project:

1. Application flow :
	* **main.ts -> app.module.ts -> app.component.ts ->.....**
2. Difference between component and service :
	* **Components** handle view related functionality.
	* **Services** handle other tasks like communicating with backend API to fetch or push data from or to backend.
3. Use of **ngOnInit()** life cycle method to populate view with data on startup. Used **json-server** to mimic backend using db.json as database to load and store tasks.
4. Selector of component will always be prefixed by **'app-'**.
5. Use of @Input and @Output decorators :
	* **@Input** - lets a parent component update data in child component.
	* **@Output** - lets a child component send data to a parent component.
6. Event Binding :
	* Mention the event name in **()="eventHandlerMethod()"**. Eg: (click)="onClick()" on components tag.
	* Use **EventEmitter** to output event to parent component.
7. **Interface** is analogous to bean class in JAVA used to represent data model.
8. Set **strictPropertyInitialization** to true in tsconfig.json/compilerOptions to overlook **('...' has no initializer and is not definitely assigned in the constructor)** error.
9. In order to use any service you need to add it as a provider into the constructor. Eg: `constructor(private  taskService: TaskService) { }` .
10. Using **Observable** in service to handle fetch operations which are async in nature and using **subscribe()** to get the value resolved by the observable.
Eg:
	*  `getTasks(): Observable<Task[]> 
	{	return  this.httpClient.get<Task[]>(this.apiUrl);}` 
	* `ngOnInit(): void {this.taskService.getTasks().subscribe((tasksFromObservable) =>this.tasks = tasksFromObservable);}`
11. 2- way data binding in forms :
	* [] -> input only (Eg. properties)
	* () -> output only (Eg. Events)
	* [()] -> 2-way (Eg. ngModel)
12. Use **$event** to refer to value emitted by EventEmitter in parent component.
13.  Using **(ngSubmit)** event to handle form submit.
14.  Using **Subject** to multicast event/objects to other components. (Check usage in uiService.ts)
15. Catch the multicasted event/object in components using **subscription** object. (check usage in header.component.ts and add-task.component.ts)
16. Routing in angular :-
	* Use **'routerLink'** attribute on < a  > tag and not **'href'** attribute because href will reload the page.
	* Limit components from appearing for certain routes using the **'Router'** service's url property. Eg.: `this.router.url === route;`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
