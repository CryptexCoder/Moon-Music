
        this.router.get('commands', (request, response) => {
            const data = {};
            this.client.commands.filter((command) => command.permLevel <= 3).forEach(command => {
                if (!data.hasOwnProperty(command.category)) data[command.category] = {};
                data[command.category][command.name] = {
                    name: command.name,
                    description: command.description,
                    aliases: command.aliases,
                    permLevel: command.permLevel,
                    cost: command.cost,
                    usageString: command.usage.nearlyFullUsage.replace('《', '<').replace('》', '>')
                };
            });
            return response.end(JSON.stringify(data));
        });
