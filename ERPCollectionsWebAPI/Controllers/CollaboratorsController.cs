using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ERPCollectionsWebAPI.Models;
using Microsoft.AspNetCore.Cors;

namespace ERPCollectionsWebAPI.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("GetAllPolicy")]
    [ApiController]
    public class CollaboratorsController : ControllerBase
    {
        private readonly ERPCollectionsContext _context;

        public CollaboratorsController()
        {
            _context = new ERPCollectionsContext();
        }

        // GET: api/Collaborators
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Collaborator>>> GetCollaborators()
        {
            return await _context.Collaborators.ToListAsync();
        }

        // GET: api/Collaborators/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Collaborator>> GetCollaborator(int id)
        {
            var collaborator = await _context.Collaborators.FindAsync(id);

            if (collaborator == null)
            {
                return NotFound();
            }

            return collaborator;
        }

        // PUT: api/Collaborators/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCollaborator(int id, Collaborator collaborator)
        {
            if (id != collaborator.IdCollaborator)
            {
                return BadRequest();
            }

            _context.Entry(collaborator).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CollaboratorExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Collaborators
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Collaborator>> PostCollaborator(Collaborator collaborator)
        {
            _context.Collaborators.Add(collaborator);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCollaborator", new { id = collaborator.IdCollaborator }, collaborator);
        }

        // DELETE: api/Collaborators/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCollaborator(int id)
        {
            var collaborator = await _context.Collaborators.FindAsync(id);
            if (collaborator == null)
            {
                return NotFound();
            }

            _context.Collaborators.Remove(collaborator);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CollaboratorExists(int id)
        {
            return _context.Collaborators.Any(e => e.IdCollaborator == id);
        }
    }
}
