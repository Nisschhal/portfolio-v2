---
title: "Setting Up SSH Keys for GitHub: My Journey from Scratch with Multiple Accounts (2025)"
description: "A complete, personal, step-by-step guide to generating SSH keys, connecting securely to GitHub, clearing old credentials, and managing multiple accounts — every detail explained exactly as I experienced it."
image: "./generate-ssh-key-1200x675.jpg"
publishedAt: "2025-12-18"
updatedAt: "2025-12-18"
author: "Nischal Puri"
tags:
  - git
  - github
  - ssh
  - devops
  - security
slug: setting-up-ssh-keys-for-github-from-scratch-with-multiple-accounts
---

When I first started coding, I completely ignored GitHub **SSH**. HTTPS felt so much simpler — just type your username and token once on your first push, and you're done. No extra setup, no fuss. It worked perfectly for my personal projects.

But as my career progressed, everything changed. I started working on company repositories alongside my personal ones. One day, I tried to push to a work repo and got hit with this:

```bash
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

### Benefits of Using SSH Keys

1.  **Enhanced Security**: Cryptographic keys are far harder to compromise than passwords or tokens.
2.  **Convenience**: No more typing credentials for every operation.
3.  **Multiple Account Management**: Clean separation — no more credential conflicts or constant clearing.

💡 **Pro Tip:** If you've ever been frustrated by HTTPS cached credentials or wrong commit identities when juggling personal and work accounts, SSH is the ultimate fix.

---

## Step 1: Clearing Old HTTPS Credentials

I had to remove the wrong cached credentials because I had no idea that my one account was preventing me from pushing or pulling repos. We want a clean slate.

### GUI Methods (Easiest)

**Windows Credential Manager:**
1. Press **Windows key** → Type "Credential Manager" → Open it.
2. Click **Windows Credentials** tab.
3. Look for entries starting with `git:https://github.com` or `github.com`.
4. Expand it and click **Remove**.

**macOS Keychain Access:**
1. Press **Command + Space** → Type "Keychain Access" → Open it.
2. Click **Login** tab and search for **GitHub**.
3. Look for entries like `gh:github.com` or `github.com`.
4. Right-click and **Delete**.

### CLI Methods (For Terminal lovers)

**macOS:**
```bash
printf "host=github.com\nprotocol=https\n\n" | git credential-osxkeychain erase
```

**Windows:**
```bash
printf "protocol=https\nhost=github.com\n" | git credential reject
```

---

## Step 2: Generating SSH Keys for GitHub

SSH uses a **public/private key pair**:
- **Public key**: You share this with GitHub (The Lock).
- **Private key**: Stays secret on your computer (The Key).

First, check if you already have keys:
```bash
ls -al ~/.ssh
```
If you see `id_ed25519` and `id_ed25519.pub`, you're already set. If not, let's make them.

### Generating the Key
```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
```

**Full breakdown:**
- `ssh-keygen`: The tool that generates keys.
- `-t ed25519`: The key type. In 2025, Ed25519 is the best: super secure and GitHub's favorite.
- `-C`: Adds a comment (your email) as a label.

### What you will see:
1. **Save location:** Press **Enter** for default.
2. **Passphrase:** I leave it blank for convenience (or set one for extra safety).
3. **Success:** You'll see a "randomart image" box. Your keys are now in `~/.ssh`.

---

## Step 3: Starting the SSH Agent (The Butler Analogy)

```bash
eval "$(ssh-agent -s)"
```

### The Butler Analogy
`ssh-agent` is exactly like hiring a **personal butler** for your private keys.
1. **The Hire:** `ssh-agent -s` starts the agent.
2. **The Setup:** `eval` is you reading the butler's instructions so your terminal knows how to talk to him.
3. **The Result:** You’ll see `Agent pid 68984`. Your butler is waiting.

**eval vs echo table:**

| Command | What It Does | Example | What Happens |
| :--- | :--- | :--- | :--- |
| `echo` | Just prints text | `echo "hello"` | Prints "hello" |
| `eval` | Runs the text as a command | `eval "echo hello"` | Actually executes the command |

Now, hand your key to the butler:
```bash
ssh-add ~/.ssh/id_ed25519
```

---

## Step 4: Adding the Public Key to GitHub

**Copy the key:**
- **macOS:** 
```
pbcopy < ~/.ssh/id_ed25519.pub
```
- **Windows (PowerShell):** 
```
cat ~/.ssh/id_ed25519.pub | clip
```

**On GitHub:**
Go to **Settings** → **SSH and GPG keys** → **New SSH key**. Paste it and save.

---

## Intermission: The "Fingerprint" Prompt (First Time Only)

If this is your first time using SSH on this machine, or you haven't used Git in ages, you'll see this when you first `clone` or `push`:

```bash
Cloning into 'your-project'...
The authenticity of host 'github.com (20.205.243.166)' can't be established.
ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
Are you sure you want to continue connecting (yes/no/[fingerprint])? 
```

**What is this?** 
It's a security feature against man-in-the-middle attacks. It’s like **registering your fingerprint** into GitHub. 
- If you've used Git on this PC before, you probably won't see this.
- If you do see it, type **`yes`** and hit Enter.
- Git will save this host to `known_hosts` and never ask you again.

---

## Step 5: Managing Multiple Accounts (The Pro Move)

I used `includeIf` to automatically switch identities based on the folder I'm in.

1. **Open global config:** `nano ~/.gitconfig`
2. **Add this structure:**

```ini
[user]
  name = Your Personal Name
  email = personal@email.com

[includeIf "gitdir:~/work/"]
  path = ~/.gitconfig-work
```

3. **Create work config:** `nano ~/.gitconfig-work`
```ini
[user]
  name = Your Work Name
  email = work@email.com
```

💡 **Pro Tip:** The **`~`** (tilde) symbol is shorthand for your **Home Directory**.
To be 100% clear, **`~/work/`** points to:
- **On Mac:** `/Users/yourname/work/`
- **On Windows:** `C:\Users\yourname\work\`
- **On Linux:** `/home/yourname/work/`

📌 **FYI:** You can change `~/work/` to any folder, like `~/freelance/` or even an absolute path like `D:/Projects/`. Both Git Bash and PowerShell understand this shortcut!

---

## Final Thoughts

That 403 error was painful, but it forced me to move to SSH—the single best "level up" for my local dev environment. Now, I jump between work and personal projects without a single credential prompt.

Thanks for following my journey. If this helps you avoid the same frustration, share it!

> Turning errors into lessons, and lessons into workflows.  

— Nischal 🚀
