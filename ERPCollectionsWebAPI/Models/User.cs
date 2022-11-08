using System;
using System.Collections.Generic;

namespace ERPCollectionsWebAPI.Models
{
    public partial class User
    {
        public User()
        {
            CaseClients = new HashSet<Case>();
            CaseCollaborators = new HashSet<Case>();
        }

        public string Lastname { get; set; } = null!;
        public string Name { get; set; } = null!;
        public int IdUser { get; set; }
        public string UserDni { get; set; } = null!;
        public string UserEmail { get; set; } = null!;
        public string Password { get; set; } = null!;
        public int RoleId { get; set; }

        public virtual Role Role { get; set; } = null!;
        public virtual ICollection<Case> CaseClients { get; set; }
        public virtual ICollection<Case> CaseCollaborators { get; set; }
    }
}
