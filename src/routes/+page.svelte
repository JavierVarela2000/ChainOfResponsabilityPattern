<script>
	import { Input, Label, Button } from 'flowbite-svelte';
</script>

<form method="post" action="?/login" class="container mx-auto mt-80 max-w-96">
	<div class="mb-6">
		<Label for="email" class="mb-2">Email address</Label>
		<Input name="email" id="email" placeholder="john.doe@company.com" />
	</div>
	<div class="mb-6">
		<Label for="password" class="mb-2">Password</Label>
		<Input name="password" type="password" id="password" />
	</div>

	<Button type="submit">Submit</Button>
</form>
