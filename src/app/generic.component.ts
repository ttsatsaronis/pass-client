export class GenericComponent {

	config: any;
  translations: any;
  globalStyling: any;

	constructor() { }

	public get $config(): any {
		return this.config;
	}

	public set $config(value: any) {
		this.config = value;
	}

	public get $globalStyling(): any {
		return this.globalStyling;
	}

	public set $globalStyling(value: any) {
		this.globalStyling = value;
	}

}
