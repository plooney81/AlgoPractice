use strict;
use Fcntl ':mode';
use warnings;
# use File::stat;
use File::Find;
no warnings 'File::Find';

sub fix_world_writable {
    # my (@world_write) = ();
    my (@paths) = @_;
    # Loop over each path in the list
    foreach(@paths){
        # Recursively find the values with global write permission
        find sub {
            # Checks if the there is world-writable permissions.
            if (((stat $_)[2] & 0777) & 002){
                # Use chmod to change the permissions, 0500 changes the permissions for global
                # to where they can no longer write to the file
                chmod (0500, $_);
            }
        }, $_;
    }

}