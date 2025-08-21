---
title: 'Automatically Creating New Users in Supabase with SQL Triggers'
description: "Supabase's built-in authentication system handles user creation securely. However, you might want to automate the creation of additional user data (like profiles) upon signup. This can be achieved using PostgreSQL triggers within Supabase."
published: '2024-05-30'
tags: [supabase, authentication, sql, postgresql]
---

**1. Create the Trigger Function:**

This function grabs the newly created user's ID and (optionally) email from the `auth.users` table during signup. You can then use this information to populate another table, like `user_profiles`.

```sql
CREATE OR REPLACE FUNCTION public.create_new_user_profile()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.users (id, email)
  VALUES (NEW.id, NEW.email);

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

**2. Set Up the Trigger:**

This code tells the database to run the `create_new_user_profile` function whenever a new user is inserted into the `auth.users` table.

```sql
CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW
EXECUTE PROCEDURE public.create_new_user_profile();
```

**Benefits:**

- Automates user data creation, reducing manual setup.
- Improves user experience by creating a basic profile upon signup.

**Remember:**

- Test the trigger function thoroughly to avoid signup disruptions.
- Ensure your profile table schema aligns with the inserted data.

By following these steps, you can leverage SQL triggers in Supabase to streamline user data management and enhance your application's signup flow.
