"use client"

import { title } from "@/components/primitives";
import React from "react";
import {Input,Button} from "@nextui-org/react";
import {EyeFilledIcon} from "./EyeFilledIcon";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem,} from "@nextui-org/react";
import {Select, SelectItem} from "@nextui-org/react";
export default function PricingPage() {

	const [isVisible, setIsVisible] = React.useState(false);

	const toggleVisibility = () => setIsVisible(!isVisible);
	return (
		<div>
						<h1 className='text-5xl font-bold mb-5'>login</h1>
			<Card className="w-[500px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">Login</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody className='gap-5 flex justify-center'>
        <p>Lets Sign You In</p>
		<Input
isRequired
      type="email"
      label="Email"
      variant="bordered"
      placeholder="Enter your email"
      onClear={() => console.log("input cleared")}
      className="max-w-lg"
    />

	 <Input
	 isRequired
      label="Password"
      variant="bordered"
      placeholder="Enter your password"
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      className="max-w-lg"
    />
    <div className='flex gap-5'>
	<Button color="success" className='w-28 h-12' variant="ghost">
        Submit
      </Button>
      </div>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://dev.to"
        >
          Visit Our Blog
        </Link>
      </CardFooter>
    </Card>
		</div>
	);
}
