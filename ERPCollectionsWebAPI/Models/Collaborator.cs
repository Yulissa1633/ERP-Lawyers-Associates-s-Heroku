using System;
using System.Collections.Generic;

namespace ERPCollectionsWebAPI.Models
{
    public partial class Collaborator
    {
        public int IdCollaborator { get; set; }
        public string Name { get; set; } = null!;
        public string Lastname { get; set; } = null!;
        public string Dni { get; set; } = null!;
        public string Email { get; set; } = null!;
    }
}
