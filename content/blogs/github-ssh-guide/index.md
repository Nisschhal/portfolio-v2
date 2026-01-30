---
title: "Setting Up SSH Keys for GitHub: My Journey from Scratch with Multiple Accounts (2025)"
description: "A complete, personal, step-by-step guide to generating SSH keys, connecting securely to GitHub, clearing old credentials, and managing multiple accounts — every detail explained exactly as I experienced it."
image: "generate-ssh-key-1200x675.jpg"
publishedAt: "2025-12-18"
updatedAt: "2025-12-18"
author: "Nischal Puri"
isPublished: true
tags:
  - git
  - github
  - ssh
  - devops
  - security
slug: setting-up-ssh-keys-for-github-from-scratch-with-multiple-accounts
---

## Setting Up SSH Keys for GitHub: My Journey from Scratch with Multiple Accounts (2025)

When I first started coding, I completely ignored GitHub **SSH**. HTTPS felt so much simpler — just type your username and token once on your first push, and you're done. No extra setup, no fuss. It worked perfectly for my personal projects.

But as my career progressed, everything changed. I started working on company repositories alongside my personal ones. One day, I tried to push to a work repo and got hit with this:

```

remote: Permission to OtherGithubAccount/first-workflow-test.git denied to LoggedInAccount.
fatal: unable to access 'https://github.com/OtherGithubAccount/project-name.git/': The requested URL returned error: 403

```

I felt like a complete beginner again. I knew backend, frontend, and Git workflows, but I was stuck at authentication. My cached credentials were from my personal account, but the repo belonged to my work account. That frustration made me realize I needed a real solution — and that's when I finally learned **SSH**.

At first, it seemed scary: cryptography, key pairs, config files… it all felt overwhelming. But once I understood it step by step, SSH became one of the most valuable skills in my toolkit. It made multiple accounts seamless and gave me real peace of mind about security.

This guide is my full journey — every single detail from my original experience, exactly in the order I did it, with full explanations of what happens at each step, why we do it, and what you'll see on screen.

---

## What is SSH and Why Use It with GitHub?

SSH (Secure Shell) is a cryptographic protocol that creates a secure connection between your computer and remote servers. For GitHub, SSH keys replace passwords entirely, proving your identity in a much safer way.

Think of it as a **secure, encrypted tunnel** between your machine and GitHub. Once set up, you can push, pull, and clone without ever typing credentials again.

While SSH is used for server access too, here we're focusing on GitHub workflows.

---

## Benefits of Using SSH Keys with GitHub

1. **Enhanced Security**: Cryptographic keys are far harder to compromise than passwords or tokens.
2. **Convenience**: No more typing credentials for every operation.
3. **Multiple Account Management**: Clean separation — no more credential conflicts or constant clearing.

---

💡 **Pro Tip:** If you've ever been frustrated by HTTPS cached credentials or wrong commit identities when juggling personal and work accounts, SSH is the ultimate fix.

---

## Getting Started: My First Big Problem

### The Classic 403 Error

```

remote: Permission to **_OtherGithubAccount_**/first-workflow-test.git denied to **_LoggedInAccount_**.
fatal: unable to access 'https://github.com/OtherGithubAccount/project-name.git/': The requested URL returned error: 403

```

This happens when your machine is authenticated as one account (LoggedInAccount) but trying to access a repo belonging to another (OtherGithubAccount).

### Step 1: Clearing Old HTTPS Credentials (What I Did First)

I had to remove the wrong cached credentials because I had no idea that my one account was preventing me from pushing or pulling repos.

_Doesn't matter for https though. Just to start with clean slate._

#### GUI Methods (Easiest)

**Windows Credential Manager:**

1. Press Windows key → Type "Credential Manager" → Open it.
2. Click **Windows Credentials** tab.
3. Look for entries starting with `git:https://github.com` or `github.com`.
4. Expand → Click **Remove**.

**macOS Keychain Access:**

1. Press Command + Space → Type "Keychain Access" → Open it.
2. Click **Login** tab and search for **GitHub**.
3. Look for entries like `gh:github.com` or `github.com`.
4. Right-click → **Delete**.

#### CLI Methods

**macOS:**

```bash
printf "host=github.com\nprotocol=https\n\n" | git credential-osxkeychain erase
```

**What happens when you run this:**

- `printf` outputs exactly the formatted text Git needs (host + protocol + blank line).
- The pipe sends it to Git's macOS credential helper in "erase" mode.
- It finds and silently deletes the HTTPS credential from Keychain.
- No output = success.

**Windows:**

```bash
printf "protocol=https\nhost=github.com\n" | git credential reject
```

📌 Only clear if the cached account isn't your desired default.

Now the old default is gone — fresh start for SSH.

### Step 2: Generating SSH Keys for GitHub

SSH uses a **public/private key pair**:

- **Public key**: You share this with GitHub.
- **Private key**: Stays secret on your computer.

First, check what you have:

```bash
ls -al ~/.ssh
```

You'll see:

- If the folder doesn't exist → No keys yet. Perfect fresh start.
- If you see `id_ed25519` and `id_ed25519.pub` → You already have keys.

💡 SSH is like a back door — with the right key pair, you can securely access any server, not just GitHub.

#### Generating the Key

Run:

```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
```

**Full breakdown:**

- `ssh-keygen`: The tool that generates keys (your key-making machine).
- `-t ed25519`: Key type — Ed25519 is the best in 2025: super secure, fast, small, and GitHub's favorite.
- `-C "your-email@example.com"`: Adds a comment so you can identify the key later (like labeling your house key).

**What happens next:**

1. Save location prompt:

   ```
   Generating public/private ed25519 key pair.
   Enter file in which to save the key (/Users/yourname/.ssh/id_ed25519):
   ```

   Press Enter for default. (You can change the name with `-f` for multiple accounts.)

2. Passphrase prompt:

   ```
   Enter passphrase (empty for no passphrase):
   Enter same passphrase again:
   ```

   I left it blank for convenience (set one for extra security).

3. Success output:
   ```
   Your identification has been saved in /Users/yourname/.ssh/id_ed25519
   Your public key has been saved in /Users/yourname/.ssh/id_ed25519.pub
   The key fingerprint is:
   SHA256:...
   The key's randomart image is:
   +--[ED25519 256]--+
   |          o=oo...|
   |         .+oooo+.|
   |          .o .*o.|
   |         . .oo.*+|
   |        S . ..=E+|
   |         o   *+=*|
   |        o   +.B.*|
   |       .    .*.o.|
   |           .+o.  |
   +----[SHA256]-----+
   ```

🎉 You now have:

- **Private key**: `id_ed25519` (super secret!)
- **Public key**: `id_ed25519.pub` (safe to share)

Check:

```bash
ls -al ~/.ssh
```

You'll see the new files with proper permissions.

📌 `id_ed25519` is the private key, `id_ed25519.pub` is the public one.

### Step 3: Starting the SSH Agent (The Butler Analogy)

```bash
eval "$(ssh-agent -s)"
```

**What happens and why the butler analogy works so well:**

`ssh-agent` is exactly like hiring a personal butler for your private keys.

- You call the butler company and hire one: `ssh-agent -s` starts the agent and prints out instructions (environment variables) on how to communicate with him.
- `eval` is you reading those instructions and setting everything up so the butler is ready at your house(machine).
- You'll see something like `Agent pid 68984` — that's your butler now waiting in the background.

**What would happen without `eval`?**

If you just ran:

```bash
ssh-agent -s
```

You would see raw output like:

```bash
SSH_AUTH_SOCK=/var/folders/3_/cc6j5xld549847mdmyyz1h140000gn/T//ssh-o8Hx2MOB8jiV/agent.69064; export SSH_AUTH_SOCK;
SSH_AGENT_PID=69065; export SSH_AGENT_PID;
echo Agent pid 69065;
```

These are **instructions** — not executed. Your shell ignores them. The butler(agent) is hired but unreachable.

**What happens with `eval`?**

```bash
eval "$(ssh-agent -s)"
```

- Captures the output.
- Executes it as real commands.
- Sets the variables so your shell can talk to the agent.
- Clean output: `Agent pid 68984`

**eval vs echo table (to understand why we need eval):**

| Command | What It Does               | Example                   | What Happens                 |
| ------- | -------------------------- | ------------------------- | ---------------------------- |
| `echo`  | Just prints text           | `echo "hello world"`      | Prints "hello world"         |
| `eval`  | Runs the text as a command | `eval "echo hello world"` | Actually executes and prints |

`echo` = "Show me the words"  
`eval` = "Do what the words say"

Now add your key:

```bash
ssh-add ~/.ssh/id_ed25519
```

**What happens with the butler:**

- `eval "$(ssh-agent -s)"` → You call the butler company and hire one. He arrives at your house and waits.
- `ssh-add ~/.ssh/id_ed25519` → You walk up to the butler and say: "Here, take this private key and hold it for me."  
  (If the key has a passphrase, you unlock it once and give him the open version.)

Now, every time Git needs to authenticate:

- Git asks the butler: "Do you have the key?"
- The butler checks his pocket (memory), finds it, and presents it.
- No passphrase prompts, no hassle — completely silent.

💡 **Important:** There's only **one butler** (ssh-agent) per session. You can hand him **multiple private keys** (personal, work, etc.) with repeated `ssh-add path/to/key`. He will automatically use the correct one when needed.

This is exactly why, after this setup, your Git pushes become completely silent and secure — your butler handles everything in the background.

### Step 4: Adding the Public Key to GitHub

Copy the key:

```bash
cat ~/.ssh/id_ed25519.pub
```

You'll see:

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAI... your-email@example.com
```

**Copy shortcuts:**

- macOS: `pbcopy < ~/.ssh/id_ed25519.pub`
- Windows PowerShell: `clip < $HOME\.ssh\id_ed25519.pub`
- or simply copy and paste the key manually.

**Add to GitHub:**

1. Go to github.com → Log in
2. Profile picture → Settings
3. SSH and GPG keys
4. New SSH key
5. Title: "My Laptop - Dec 2025"
6. Key type: Authentication Key
7. Paste the full key
8. Add SSH key

You might need to enter your GitHub password once.

Now SSH URLs work — no more credentials needed!

### Step 5: Configuring Automatic Identity for Multiple Accounts

I hated manually setting name/email per repo for commits for each account.
using `git config` to set the identity for each repo.

Then I realized I could use `.gitconfig`, `includeIf` to automatically set the identity for each repo.

Edit or create `~/.gitconfig`:

```bash
nano ~/.gitconfig
```

use vim, nano, whatever you have/want.

Add:

```ini
[user]
  name = Your Personal Name
  email = personal@email.com

[includeIf "gitdir:~/work/"]
  path = ~/.gitconfig-work
```

Create `~/.gitconfig-work`:
this is the config for the work account

```ini
[user]
  name = Your Work Name
  email = work@email.com
```

Similarly, add `includeIf` for any other account. and create the config file for it.

Now any repo in `~/work/` automatically uses work identity — everything else uses personal.

For a third account and so on, add another `includeIf` section and folder specific to that account.

### FYI: Git Configuration Levels

| Level  | Command Example                        | Scope                            | When to Use                      |
| ------ | -------------------------------------- | -------------------------------- | -------------------------------- |
| Local  | `git config user.name "Name"`          | Only this repository             | Per-project differences          |
| Global | `git config --global user.name "Name"` | All repositories on your machine | Most common — your main identity |
| System | `git config --system user.name "Name"` | All users on the computer        | Rare — shared machines           |

For beginners: Use `--global`.

## Final Thoughts

That 403 error was painful, but it led me to SSH — one of my best workflow upgrades.

Thanks for following my full journey. If this helps you avoid the same frustration, share it. Let's connect on GitHub or X!

— Nischal 🚀
