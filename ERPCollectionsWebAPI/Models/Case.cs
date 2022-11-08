using System;
using System.Collections.Generic;

namespace ERPCollectionsWebAPI.Models
{
    public partial class Case
    {
        public int IdCase { get; set; }
        public string CodeCase { get; set; } = null!;
        public string FormalQuote { get; set; } = null!;
        public string State { get; set; } = null!;
        public string Court { get; set; } = null!;
        public string Description { get; set; } = null!;
        public int ClientId { get; set; }
        public int CollaboratorId { get; set; }

        public virtual User Client { get; set; } = null!;
        public virtual User Collaborator { get; set; } = null!;
    }
}
