//Displays the list of commands found in ./commands/
module.exports = {
    name = 'commands',
    hidden = false,
    enabled = true,
    matchStart = false,
    handler = function(data) {
        var response = 'Commands: ' + commands.filter(function(command) {
            return command.enabled && !command.hidden;
        }).map(function(command){return command.name;}).sort().join(', ');
        output({text: response, destination: data.source, userid: data.userid});
    }
}
