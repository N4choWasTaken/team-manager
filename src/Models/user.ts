import { User } from "@prisma/client"
import { id } from "inversify"

export class ApiUser implements iUser {
	name: string
	password: string
	email: string
	id: string
}

export class ApiUserBuilder {
	private user: iUser = new ApiUser();

	withName(name: string = 'name'): ApiUserBuilder {
	  this.user = {
		...this.user,
		name
	  };
	  return this;
	}

	withPassword(password: string = 'password'): ApiUserBuilder {
	  this.user = {
		...this.user,
		password
	  };
	  return this;
	}

	withEmail(email: string = 'user@example.com'): ApiUserBuilder {
	  this.user = {
		...this.user,
		email
	  };
	  return this;
	}

	withId(id: string): ApiUserBuilder {
	  this.user = {
		...this.user,
		id
	  };
	  return this;
	}

	save(): iUser {
	  const user = this.user;
	  this.user = new ApiUser();
	  return user;
	}
  }

export interface iUser {
	name: string
	password: string
	email: string
	id: string
}
