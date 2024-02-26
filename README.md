# Create Remote Pull Request

This Action automates the process of creating a pull request across repositories.

## Inputs

- `title` (required): Title of the pull request.
- `body` (required): Body of the pull request.
- `owner` (required): Owner of the target repository.
- `repo` (required): Name of the target repository.
- `branch` (required): Branch to create the pull request from.
- `base-branch` (optional): Target branch in the target repository.
- `token` (optional): token 

## Example Usage

```yaml
name: Use Reusable Action

on:
  push:
    branches:
      - main

jobs:
  create-pr-job:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Use Create Pull Request Action
        uses: ./create-remote-pullrequest
        with:
          title: 'My Pull Request Title'
          body: 'My Pull Request Body'
          owner: 'your-target-repo-owner'
          repo: 'your-target-repo-name'
          branch: 'feature-branch'
          base-branch: 'main'
