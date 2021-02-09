from urllib.parse import urlparse
import ipaddress
import re
import os


#! URL Validation
#* Write a URL validator with the following acceptance criteria:
#? 1: Must be able to handle http, https, and ssh protocols
#? 2: Needs to handle fully qualified domain names, IPv4 and IPv6 addresses
#? 3: Can operate with or without port numbers
#? 4: Must validate unicaode characters within the URI only
#? 5: Must operate with or without query string parameters, and page anchors
#? 6: Your validator should handle URI's with and without file extension notation.
#? 7: The validateURL method should return '0' or '1' for false and true respectively.

# helper function that checks if fully qualified domain name (FQDN)
def fqdn(hostName):
    if hostName[-1] == '.':
        hostName = hostName[:-1]
    if len(hostName) > 253: return False
    
    labels = hostName.split('.')
    
    # # checks if the top level domain consists of all numbers
    # if re.match(r'[0-9]+$', labels[-1]): return False
    
    allowed = re.compile(r"(?!-)[a-z0-9-]{1,63}(?<!-)$", re.IGNORECASE)
    return all(allowed.match(label) for label in labels)

# helper function that checks if port numbers are valid
def validatePortNumbers(pnumbers):
    try:
        port = int(pnumbers)
        if 65535 < port < 1: raise ValueError
        else: return True
    except ValueError:
        return False

def validateURL(url):
    # parse the url
    parsed = urlparse(url)
    print(parsed)
    
    #1. check handle
    if not parsed.scheme in ['http', 'https', 'ssh']: return 0
    
    #2. check domain names, IPv4 and IPv6 addresses
    #2.1 checks if valid IPv4 or IPv6 address
    try:
        ipaddress.ip_address(parsed.netloc)
    except ValueError:
        print(parsed.netloc)
        # if valueError then it is not an IPv4 or IPv6, now check if FQDN and portNumbers
        
        if not fqdn(parsed.netloc):
            if ":" in parsed.netloc:
                if not validatePortNumbers(parsed.netloc[parsed.netloc.rindex(":") + 1:]):
                    return 0
            else:
                return 0
    
    
    #4. validate unicode characters within the URI only
    for char in parsed.netloc:
        if ord(char) > 127:
            return 0



    #5. check query string parameters and page anchors
    for char in parsed.query:
        if char == " ": return 0
    
    #6. check file extension notation
    for char in parsed.path:
        if char == " ": return 0


    #7. return 0 if false and 1 if true

    return 1